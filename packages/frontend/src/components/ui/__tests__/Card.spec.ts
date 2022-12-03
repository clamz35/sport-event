import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '../Card.vue';

describe('Card', () => {
  it('should be empty by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.find('.card').text()).toBeFalsy();
  });

  it('should have content', () => {
    const cardContent = 'My card content';
    const wrapper = mount(Card, {
      slots: {
        default: cardContent,
      },
    });

    expect(wrapper.find('.card').text()).toContain(cardContent);
  });
});
