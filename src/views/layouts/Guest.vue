<template>
    <div class="d-flex flex-column flex-root">
      <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/14.png">
        <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                    <a href="javascript:void (0)" class="mb-12">
<!--                        <img alt="Logo" src="logo-2-dark.svg" class="h-45px" />-->
                    </a>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Guest"
}
</script>

<style scoped>
.bgi-position-y-bottom {
    background-position-y:  200px;
    margin-top: 5%;
}

</style>