import { mount } from '@vue/test-utils'

// Components
import Cart from '.'

describe('Cart', () => {
    it('should mount the component', () => {
        const wrapper = mount(Cart)

        expect(wrapper.vm).toBeDefined()
    })

    it('should emit close event when button gets clicked', async () => {
        const wrapper = mount(Cart)
        const button = wrapper.find('[data-testid="close-button"]')

        await button.trigger('click')

        expect(wrapper.emitted().close).toBeTruthy()
        expect(wrapper.emitted().close).toHaveLength(1)
    })

    it('should hide the cart when no prop isOpen is passed', () => {
        const wrapper = mount(Cart)

        expect(wrapper.classes()).toContain('hidden')
    })
})
