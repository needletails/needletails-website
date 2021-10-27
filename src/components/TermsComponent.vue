<template>
  <div class="page-layout-2">
    <div class="page-layout-2-top">
      <h1 v-scrollanimation>{{ $t("termsTitle") }}</h1>
    </div>
    <div class="stretch-height">
      <article
        id="bodyWrapper"
        class="outer-custom-box-color custom-box-shadow privacy"
      >
        <article>
          <ul>
            <h2 class="all_subheading">{{ $t("termsSubtitleOne") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphOne") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleTwo") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphTwo") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleThree") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphThree") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleFour") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphFour") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleFive") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphFive") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleSix") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphSix") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleSeven") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphSeven") }}
            </li>

            <h2 class="all_subheading">{{ $t("termsSubtitleEight") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphEight") }}
            </li>
            <h2 class="all_subheading">{{ $t("termsSubtitleNine") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphNine") }}
            </li>
            <h2 class="all_subheading">{{ $t("termsParagraphOne") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphOne") }}
            </li>
            <h2 class="all_subheading">{{ $t("termsSubtitleTen") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphTen") }}
            </li>
            <h2 class="all_subheading">{{ $t("termsSubtitleEleven") }}</h2>
            <li class="all_paragraph">
              {{ $t("termsParagraphEleven") }}
            </li>
            <p class="all_paragraph">{{ $t("termsSubtitleTweleve") }}</p>
          </ul>
        </article>
        <div id="swiftWrapper">
          <h1 class="all_heading">{{ $t("termsParagraphThirteen") }}</h1>
          <h4 class="all_paragraph">
            {{ $t("termsSubtitleThirteen") }}
          </h4>
        </div>
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
    h2 {
    line-height: 5.5rem;
  }
}
</style>