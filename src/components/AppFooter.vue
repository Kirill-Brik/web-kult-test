<script setup>
import AppNav from "./AppNav.vue";
import AppIcon from "./AppIcon.vue";
</script>
<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <img class="footer__logo" src="@/assets/logo.png" alt="Логотип" />
      <AppNav class="footer__nav" />
      <ul class="footer__contact-list">
        <li class="footer__contact-item">
          <AppIcon class="footer__contact-icon" icon-name="phone" height="16px" />
          <a class="footer__contact" href="tel:+7 (495) 999-99-99">+7 (495) 999-99-99</a>
        </li>
        <li class="footer__contact-item">
          <AppIcon class="footer__contact-icon" icon-name="pin" height="16px" />
          <span class="footer__contact">г. Воронеж, ул. Никитина, 119А</span>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 24px 0;
  background-color: #eceaea;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    width: 100%;
    max-width: 1216px;
  }

  &__logo {
    height: 48px;
  }

  &__nav {
    flex: 1 1 auto;
    margin: 0 48px;
    color: #555555;
  }

  &__contact-list {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    max-width: 465px;
    list-style-type: none;
  }

  &__contact-item {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 8px;
    color: #555555;

    a {
      &:hover {
        color: #9f9f9f;
      }

      &:active {
        color: inherit;
      }

      &_active {
        color: #9f9f9f;
      }
    }
  }

  &__contact-icon {
    color: inherit;
  }

  &__contact {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: inherit;
    text-decoration: none;
  }
}
</style>
