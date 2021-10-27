<template>
  <input
    class="input font"
    :class="getStyleClasses()"
    @input="handleInput($event.target.value)"
    :type="type"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      reqiured: false,
    },
    font: {
      type: String,
      reqiured: false,
    },
    type: {
      type: String,
      required: false,
    },
    required: {
      type: String,
      required: false,
    },
  },
  emits: ["modelValue"],

  setup(props, context) {
    function getStyleClasses() {
      return [props.size, props.font].map((val) => val && `is-${val}`);
    }

    function handleInput(value) {
      context.emit("modelValue", value);
    }
    return {
      getStyleClasses,
      handleInput,
    };
  },
};
</script>

<style lang="css" scoped>
.input {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 2.5rem !important;
  max-height: 4rem !important;
  /* border-radius: 5px; */
  box-sizing: border-box;
  border: none;
  text-indent: 10px;
  padding: 2px;
  background-color: rgba(18, 18, 18, 0.9);
  color: white;
}

*:focus,
textarea:focus,
.input:focus {
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.input.is-large {
  width: 100%;
}
.input.is-medium {
  width: 75%;
}
.input.is-small {
  width: 50%;
}
.input.is-tiny {
  width: 25%;
}

.font.is-large-text {
  font-size: 2.5rem;
}
.font.is-medium-text {
  font-size: 2rem;
}
.font.is-small-text {
  font-size: 1.5rem;
}
.font.is-text {
  font-size: 1rem;
}
@media screen and (max-width: 766px) {
  .input {
    width: 100% !important;
  }
}
</style>