// Packages
import { mount } from '@vue/test-utils'

// Components
import ProductCart from '../ProductCart'

// Services
import { makeServer } from '@/miragejs/server'

describe('ProductCart - Unit', () => {
    let server

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should mount the component', () => {
        const wrapper = mount(ProductCart, {
            propsData: {
                product: server.create('product'),
            },
        })

        console.log(wrapper.html())
        expect(wrapper.vm).toBeDefined()
    })
})
