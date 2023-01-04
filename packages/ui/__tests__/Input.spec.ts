import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '../Input.vue';

describe('Input', () => {
  it('should exists', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input')).toBeTruthy();
  });

  it('should be of type text by default', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').attributes().type).toBe('text');
  });

  it('should be of type date', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'date',
      },
    });

    expect(wrapper.find('input').attributes().type).toBe('date');
  });

  it('should be of type number', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'number',
      },
    });

    expect(wrapper.find('input').attributes().type).toBe('number');
  });

  it('should be of type datetime-local', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'datetime-local',
      },
    });

    expect(wrapper.find('input').attributes().type).toBe('datetime-local');
  });

  it('should not have error', () => {
    const wrapper = mount(Input, {});

    expect(wrapper.props().error).toBeFalsy();
    expect(wrapper.find('input').classes()).not.toContain('input--error');
  });

  it('should not have error', () => {
    const wrapper = mount(Input, {
      props: {
        error: true,
      },
    });

    expect(wrapper.props().error).toBeTruthy();
    expect(wrapper.find('input').classes()).toContain('input--error');
  });
});
