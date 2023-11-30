<script>
export default {
  props: {
    pagination: Array,
  },

  emits: ["change-page"],
};
</script>

<!-- <template>
  <nav aria-label="..." class="my-3">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="link in pagination"
        :key="link.label"
        :class="{
          disabled: !link.url,
        }"
        @click="$emit('change-page', link.url)"
      >
        <a
          class="page-link"
          :class="{
            active: link.active,
          }"
          href="#type"
          v-html="link.label"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  --bs-pagination-active-bg: #444 ;
  --bs-pagination-active-border-color: #444 ;
}
.disabled {
    background-color: rgba($color: #ffffff, $alpha: 0.1) !important; 
}
.page-link {
  color: #444;
}

</style> -->
