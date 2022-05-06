// Packages
import { mount } from '@vue/test-utils'

// Components
import DefaultLayout from '@/layouts/default'
import Cart from '@/components/Cart'

// Mocks
import { CartManager } from '@/managers/CartManager'

describe('Default Layout', () => {
    it('should mount Cart', () => {
        const wrapper = mount(DefaultLayout, {
            mocks: {
                $cart: new CartManager(),
            },
            stubs: {
                Nuxt: true,
            },
        })

        expect(wrapper.findComponent(Cart).exists()).toBe(true)
    })
})
