import React from 'react';
import cx from 'classnames';
import css from './SlideButton.module.scss';

export const Direction = {
  left: 'left',
  right: 'right',
};

export function SlideButton({
  direction = Direction.left,
  isVisible = true,
  onClickSlideButton,
}) {
  return (
    isVisible && (
      <div
        data-testid={'slide-button'}
        className={cx(css.arrow, css[direction])}
        onClick={onClickSlideButton}
      />
    )
  );
}
