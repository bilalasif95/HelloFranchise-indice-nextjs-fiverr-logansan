import cookie from 'js-cookie'
import Router from 'next/router'

export const handleLogin = (token) => {
    cookie.set('token', token);
    if(window.location.href.includes("listing/")){
        Router.push(window.location.href)
    } else {
        Router.push('/')
    }
}

export const redirectUser = (ctx, location) => {
    if(ctx.req){
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end()
    } else {
        Router.push(location)
    }
}

export const handleLogout = () => {
    cookie.remove('token')
    Router.push('/')
}