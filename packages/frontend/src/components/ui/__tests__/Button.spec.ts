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

  it('should be secondary', () => {
    const wrapper = mount(Button, {
      props: {
        theme: 'secondary',
      },
    });

    expect(wrapper.props().theme).toBe('secondary');
  });
});
