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
                product: server.create('product', {
                    title: 'Relógio bonito',
                    price: '25,90',
                }),
            },
        })

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.text()).toContain('Relógio bonito')
        expect(wrapper.text()).toContain('$25,90')
    })
})
