import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button', () => {
  it('should exist', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button')).toBeTruthy();
  });

  it('should be primary theme by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.props().theme).toBe('primary');
  });

  it('should has primary class', () => {
    const wrapper = mount(Button, {});

    expect(wrapper.classes()).toContain('button--primary');
  });

  it('should be secondary', () => {
    const wrapper = mount(Button, {
      props: {
        theme: 'secondary',
      },
    });

    expect(wrapper.props().theme).toBe('secondary');
  });

  it('should has secondary class', () => {
    const wrapper = mount(Button, {
      props: {
        theme: 'secondary',
      },
    });

    expect(wrapper.classes()).toContain('button--secondary');
  });

  it('should be not fluid by default', () => {
    const wrapper = mount(Button, {});

    expect(wrapper.props().fluid).toBeFalsy();
    expect(wrapper.classes()).not.toContain('button--fluid');
  });

  it('should be fluid', () => {
    const wrapper = mount(Button, {
      props: {
        fluid: true,
      },
    });

    expect(wrapper.props().fluid).toBeTruthy();
    expect(wrapper.classes()).toContain('button--fluid');
  });

  it('should be not disabled by default', () => {
    const wrapper = mount(Button, {});
    expect(wrapper.props().disabled).toBeFalsy();
    expect(wrapper.attributes().disabled).toBeUndefined();
  });

  it('should be not disabled by default', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.attributes().disabled).toBeDefined();
  });
});
