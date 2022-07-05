<template>
    <button type="button" class="btn btn-sm btn-icon btn-color-dark btn-active-color-primary btn-active-color- border-0 me-n3"  @click="$emit('selected')">
        <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
        <span class="svg-icon svg-icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" ></rect>
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" ></rect>
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" ></rect>
                    </g>
                </svg>
            </span>
        <!--end::Svg Icon-->
    </button>
</template>

<script>
export default {
    name: "MoreButton"
}
</script>

<style scoped>

</style>