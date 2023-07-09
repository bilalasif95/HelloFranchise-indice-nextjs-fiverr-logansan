import jwt from 'jsonwebtoken';
import { listings as Listing } from '../../../../models';

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).json({ message: 'No autorization token' });
  }

  switch (req.method) {
    case 'POST':
      await setListingClaim(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const setListingClaim = async (req, res) => {
  const { userId } = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  try {

    console.log("BODY****************", req.body);
    const listingId = req.body.listingId
    const key = req.body.key

    const listing = await Listing.findOne({
      where: { id: listingId },
    });

    const base64CreatedAt = Buffer.from(new Date(listing.createdAt).toISOString()).toString('base64')
    console.log("IS valid key", base64CreatedAt === key);

    if (listing && base64CreatedAt === key) {
      await Listing.update({
        userId: userId
      }, {
        where: { id: listingId },
      });

      return res.send({ message: "Listing claimed successfully" });
    }

    throw Error("Listing not found or key mismatched")

  } catch (error) {
    res.status(500).send(error.message);
  }
};
