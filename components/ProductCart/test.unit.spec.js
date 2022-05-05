// Packages
import { mount } from '@vue/test-utils'
import { cartState } from '@/state'

// Components
import ProductCart from '.'

// Services
import { makeServer } from '@/miragejs/server'

const mountProductCart = () => {
    const product = server.create('product', {
        title: 'Relógio bonito',
        price: '25,90',
        image: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    })

    return {
        wrapper: mount(ProductCart, {
            propsData: {
                product,
            },
        }),
        product,
    }
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
        const { wrapper } = mountProductCart()

        expect(wrapper.element).toMatchSnapshot()
    })

    it('should mount the component', () => {
        const { wrapper } = mountProductCart()

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.text()).toContain('Relógio bonito')
        expect(wrapper.text()).toContain('$25,90')
    })

    xit('should add item to cartState on button click', async () => {
        const { wrapper, product } = mountProductCart()

        await wrapper.find('button').trigger('click')

        expect(cartState.items).toHaveLength(1)
    })
})
