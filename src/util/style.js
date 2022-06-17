import styled, { css } from "styled-components";

import _get from "lodash/get";

export { styled, css };

/**
 * Returns the property
 *
 * @param {string} propName
 * @param {string} defaultValue
 * @return {Function} function that takes the properties and returns the prop value
 */
export function prop(propName, defaultValue) {
  return (props) => _get(props, propName) || defaultValue;
}

/**
 * Returns the theme property as a css class.
 *
 * @param {string} propName
 * @return {Function} function that takes the properties and returns the theme.propName value
 */
export function theme(propName) {
  return prop(`theme.${propName}`);
}

/**
 * Returns the z-index property as a css class.
 *
 * @param {string} propName
 * @return {Function} function that takes the properties and returns the theme.colors.propName value
 */
export function z(propName) {
  return prop(`theme.z.${propName}`);
}

/**
/**
 * Returns the color property as a css class.
 *
 * @param {string} propName
 * @return {Function} function that takes the properties and returns the theme.colors.propName value
 */
export function color(propName) {
  return prop(`theme.colors.${propName}`);
}

/**
 * Returns the font property as a css class.
 *
 * @param {string} propName
 * @return {Function} function that takes the properties and returns the theme.fonts.propName value
 */
export function font(propName) {
  return prop(`theme.fonts.${propName}`);
}

export function context(...contexts) {
  return function (...cssContent) {
    return contexts.map(
      (context) => css`
        @media ${theme("contexts." + context)} {
          ${css(...cssContent)}
        }
      `
    );
  };
}

export function testProp(prop, fct) {
  return function (...cssContent) {
    return (props) => (fct(_get(props, prop)) ? css(...cssContent) : null);
  };
}

export function eq(prop, value) {
  return function (...cssContent) {
    return (props) => (_get(props, prop) === value ? css(...cssContent) : null);
  };
}

export function eqnot(prop, value) {
  return function (...cssContent) {
    return (props) => (_get(props, prop) !== value ? css(...cssContent) : null);
  };
}

export function is(propOrFunc) {
  return function (...cssContent) {
    return (props) => (test(props, propOrFunc) ? css(...cssContent) : null);
  };
}

export function isnot(propOrFunc) {
  return function (...cssContent) {
    return (props) => (!test(props, propOrFunc) ? css(...cssContent) : null);
  };
}

export function ifelse(propOrFunc) {
  return function (...cssContentIf) {
    return function (...cssContentElse) {
      return (props) =>
        test(props, propOrFunc) ? css(...cssContentIf) : css(...cssContentElse);
    };
  };
}

function test(props, propOrFunc) {
  return typeof propOrFunc === "function"
    ? propOrFunc(props)
    : Boolean(_get(props, propOrFunc));
}
