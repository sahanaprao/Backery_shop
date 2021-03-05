<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-4"></div>
                <div class="col-xs-8 col-md-4">
                    <building></building>
                </div>
            <div class="col-xs-2 col-md-4"></div>
        </div>
    </div>
</template>


<script>
import building from './Building.vue'

export default {
    name: 'bakery',
    components: {
        building
    }
}
</script>

<style>
</style>