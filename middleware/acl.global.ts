export default defineNuxtRouteMiddleware(to => {
    const env = process.server ? 'server' : 'client'
    console.log(`[middleware:${env}] to :>> `, to.fullPath);
})