<script lang="ts" setup>
const setAuthCookies = () => {
    useCookie<any>('userData').value = { role: 'admin' }
    useCookie('accessToken').value = '1234567890'
}
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <button @click="setAuthCookies">set auth cookies</button>
    </div>
</template>
