// Packages
import { mount } from '@vue/test-utils'

// Components
import ProductCart from '../ProductCart'

describe('ProductCart - Unit', () => {
    it('should mount the component', () => {
        const wrapper = mount(ProductCart, {
            propsData: {
                product: {},
            },
        })

        expect(wrapper.vm).toBeDefined()
    })
})
