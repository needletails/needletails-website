<template>
  <div class="page-layout-2">
    <div class="page-layout-2-top">
      <h1 v-scrollanimation>{{ $t("privacyTitle") }}</h1>
    </div>
    <div class="stretch-height">
      <article
        id="bodyWrapper"
        class="privacy outer-custom-box-color custom-box-shadow"
      >
        <p class="all_paragraph">
          {{ $t("privacyStatement") }}
        </p>

        <p class="all_paragraph">
          {{ $t("privacyParagraph") }}
        </p>

        <h2 class="all_subheading">{{ $t("privacySubheading") }}</h2>

        <p class="all_paragraph }">
          {{ $t("privacyParagraphTwo") }}
        </p>
        <ul>
          <h3 class="all_subh3">
            <li class="all_list-item_title">
              {{ $t("privacySubheadingTwo") }}
            </li>
          </h3>

          <p class="all_paragraph">
            {{ $t("privacyParagraphThree") }}
          </p>

          <h3 class="all_subh3">
            <li class="all_list-item_title">
              {{ $t("privacySubheadingThree") }}
            </li>
          </h3>

          <p class="all_paragraph">
            {{ $t("privacyParagraphFour") }}
          </p>

          <h3 class="all_subh3">
            <li class="all_list-item_title">
              {{ $t("privacySubheadingFour") }}
            </li>
          </h3>

          <p class="all_paragraph">
            {{ $t("privacyParagraphFive") }}
          </p>
        </ul>
        <h2 class="all_subheading">{{ $t("privacySubheadingFive") }}</h2>

        <li class="all_paragraph">
          {{ $t("privacyParagraphSix") }}
        </li>

        <h2 class="all_subheading">{{ $t("privacySubheadingSix") }}</h2>

        <li class="all_paragraph">
          {{ $t("privacyParagraphSeven") }}
        </li>

        <h2 class="all_subheading">{{ $t("privacySubheadingSeven") }}</h2>

        <li class="all_paragraph">
          {{ $t("privacyParagraphEight") }}
        </li>

        <h2 class="all_subheading">{{ $t("privacySubheadingEight") }}</h2>

        <li class="all_paragraph">
          {{ $t("privacyParagraphNine") }}

          <h2 class="all_subheading">{{ $t("privacySubheadingNine") }}</h2>
        </li>
        <li class="all_paragraph">
          {{ $t("privacyParagraphTen") }}

          <h2 class="all_subheading">{{ $t("privacySubheadingTen") }}</h2>
        </li>
        <li class="all_paragraph">
          {{ $t("privacyParagraphEleven") }}
        </li>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
@media screen and (max-width: 768px) {
  .page-layout-2-top > h1 {
    text-align: center;
    margin: 0 auto;
  }
}
@media screen and (min-width: 3840px) and (min-height: 2160px) {
 h1 {
    font-size: 6rem;
  }
  p,
  article {
    font-size: 4rem;
    line-height: 4.5rem;
  }
}
</style>