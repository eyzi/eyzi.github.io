<template>
  <div>
    <div>Mudae's Quality/Quantity Kakera Requirements</div>

    <div>
      <label class="right-label">From: </label>
      <input
        class="left-input"
        v-model="fromLevel"
        type="number"
        min="0"
        max="999" />
    </div>

    <div>
      <label class="right-label">To: </label>
      <input
        class="left-input"
        v-model="toLevel"
        type="number"
        min="0"
        max="999" />
    </div>

    <div>Kakera Required: {{ kakeraRequired }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const base = ref(2000);
    const compound = ref(200);
    const fromLevel = ref(0);
    const toLevel = ref(1);
    return {
      base,
      compound,
      fromLevel,
      toLevel
    }
  },
  computed: {
    kakeraRequired(): number {
      return this.qualityKak(this.toLevel) - this.qualityKak(this.fromLevel);
    }
  },
  methods: {
    qualityKakSingle(level: number): number {
      switch (level) {
        case 0: return 0;
        case 1: return this.base;
        default: return this.qualityKakSingle(level - 1) + 200;
      }
    },
    qualityKak(level: number): number {
      switch (level) {
        case 0: return 0;
        case 1: return this.base;
        default: return this.qualityKakSingle(level) + this.qualityKak(level - 1);
      }
    }
  }
});
</script>

<style>
.right-label {
  display: inline-block;
  width: 50px;
  text-align: right;
  padding: 5px;
}

.left-input {
  display: inline-block;
  width: 100px;
  border: none;
  border-bottom: 1px solid gray;
  text-align: center;
}
</style>