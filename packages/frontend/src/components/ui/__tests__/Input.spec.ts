import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '../Input.vue';

describe('Input', () => {
  it('should exists', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input')).toBeTruthy();
  });
});
