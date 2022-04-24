// Packages
import { mount } from '@vue/test-utils'

// Components
import ProductCart from '../ProductCart'

// Services
import { makeServer } from '@/miragejs/server'

const mountProductCart = () => {
    return mount(ProductCart, {
        propsData: {
            product: server.create('product', {
                title: 'Relógio bonito',
                price: '25,90',
                image: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            }),
        },
    })
}

describe('ProductCart - Unit', () => {
    let server

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should match snapshot', () => {
        const wrapper = mountProductCart()

        expect(wrapper.element).toMatchSnapshot()
    })

    it('should mount the component', () => {
        const wrapper = mountProductCart()

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.text()).toContain('Relógio bonito')
        expect(wrapper.text()).toContain('$25,90')
    })
})
