// Packages
import { mount } from '@vue/test-utils'

// Components
import CartItem from '.'

// Services
import { makeServer } from '@/miragejs/server'

describe('CartItem', () => {
    let server

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should mount the component', () => {
        const product = server.create('product', {
            title: 'Lindo relogio',
            price: '22.33',
        })
        const wrapper = mount(CartItem, {
            propsData: {
                product,
            },
        })

        expect(wrapper.vm).toBeDefined()
    })
})
