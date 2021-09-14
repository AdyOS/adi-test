import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import cx from 'classnames';
import css from './SlidePane.module.scss';
import { SlideButton, Direction } from './slide-button/SlideButton';

export const SidebarViewMode = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};
export default function SlidePane({
  slideViewMode: sidebarViewMode = SidebarViewMode.small,
  leftSidebarLabel,
  leftSidebarContent,
  rightSidebarLabel,
  rightSidebarContent,
}) {
  const [viewMode, setViewMode] = useState(sidebarViewMode);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);
  const [isLeftContentVisible, setIsLeftContentVisible] = useState(false);
  const [isRightContentVisible, setIsRightContentVisible] = useState(false);

  useEffect(() => {
    switch (viewMode) {
      case SidebarViewMode.small:
        setIsRightArrowVisible(true);
        setIsLeftArrowVisible(false);
        setIsLeftContentVisible(false);
        setIsRightContentVisible(true);
        break;
      case SidebarViewMode.medium:
        setIsRightArrowVisible(true);
        setIsLeftArrowVisible(true);
        setIsLeftContentVisible(true);
        setIsRightContentVisible(true);
        break;
      case SidebarViewMode.large:
        setIsRightArrowVisible(false);
        setIsLeftArrowVisible(true);
        setIsLeftContentVisible(true);
        setIsRightContentVisible(false);
        break;
      default:
        setIsRightArrowVisible(false);
        setIsLeftArrowVisible(false);
        setIsLeftContentVisible(false);
        setIsRightContentVisible(false);
        break;
    }
  }, [viewMode]);

  const onLeftArrowClick = () => {
    if (viewMode === SidebarViewMode.medium) {
      setViewMode(SidebarViewMode.small);
    } else {
      setViewMode(SidebarViewMode.medium);
    }
  };

  const onRightArrowClick = () => {
    if (viewMode === SidebarViewMode.small) {
      setViewMode(SidebarViewMode.medium);
    } else {
      setViewMode(SidebarViewMode.large);
    }
  };

  const renderLeftSidebar = () =>
    isLeftContentVisible ? leftSidebarContent : leftSidebarLabel;

  const renderRightSidebar = () =>
    isRightContentVisible ? rightSidebarContent : rightSidebarLabel;

  return (
    <Container className={cx(css.slidePane, css[viewMode])}>
      <Col className={css.leftPane}>{renderLeftSidebar()}</Col>

      <Col className={css.actions}>
        <SlideButton
          direction={Direction.right}
          isVisible={isRightArrowVisible}
          onClickSlideButton={onRightArrowClick}
        />
        <SlideButton
          direction={Direction.left}
          isVisible={isLeftArrowVisible}
          onClickSlideButton={onLeftArrowClick}
        />
      </Col>
      <Col className={css.rightPane}>{renderRightSidebar()}</Col>
    </Container>
  );
}
