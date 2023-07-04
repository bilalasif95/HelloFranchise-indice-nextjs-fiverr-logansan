import Link from 'next/link';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Footer = ({ bgColor }) => {
  const Router = useRouter();
  const { t } = useTranslation("common");

  const onLanguageChange = (language) => {
    Router.push(Router.pathname, Router.asPath, { locale: language });
  };

  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>{t('About')}</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> About HelloFranchise
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Investor
                        Relations
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/terms-and-condition'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Terms And Condition
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Careers
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Discover</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Listings
                      </a>
                    </Link>
                  </li>
                  {/*<li>
                    <Link href='/events'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Events
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/single-events'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Events Details
                      </a>
                    </Link>
                  </li>*/}
                  <li>
                    <Link href='/contact'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Customer
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Testimonials
                      </a>
                    </Link>
                  </li>
                  {/*<li>
                    <Link href='/blog'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Our Blog
                      </a>
                    </Link>
                  </li>*/}
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Business With HelloDranchise</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>
                        <i className='flaticon-left-chevron'></i> FAQ's
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Languages</h3>
                <div className='languages-switch'>
                  <select
                    defaultValue={Router.locale}
                    onChange={(e) => onLanguageChange(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="nl">Dutch</option>
                  </select>
                </div>

                <h3>Countries</h3>
                <div className='country-switch'>
                  <select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Holland</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright <span>HelloFranchise</span> is Proudly Crafted by{' '}
              <a href='https://rapidstartup.io/' target='_blank' rel='noreferrer'>
                RapidStartup
              </a>
            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
