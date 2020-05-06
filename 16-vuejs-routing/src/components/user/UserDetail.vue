<template>
    <div>
        <h3>Some User Details</h3>
        <p>Id: {{ $route.params.id }}</p>
        <router-link 
            tag="button"
            :to="{ name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', taka: 100} }"
            class="btn btn-primary"
        >Edit User</router-link>
    </div>
</template>