<template>
  <button class="button"><slot></slot></button>
</template>
<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #f4f6f9;
  background: #403432;
  border: none;

  &:hover {
    background: #776763;
  }
  &:active,
  &_type_active {
    background: #5b3a32;
  }

  &:disabled {
    background: #c1b4b1;
  }
}
</style>
