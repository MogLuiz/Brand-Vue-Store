import { mount } from '@vue/test-utils'

// Components
import Cart from '.'

describe('Cart', () => {
    it('should mount the component', () => {
        const wrapper = mount(Cart)

        expect(wrapper.vm).toBeDefined()
    })
})
