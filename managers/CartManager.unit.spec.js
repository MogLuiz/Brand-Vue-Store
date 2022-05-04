// CartManager
import { CartManager } from '@/managers/CartManager'

// Services
import { makeServer } from '@/miragejs/server'

describe('CartManager', () => {
    let server

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should set cart to open', () => {
        const manager = new CartManager()
        const state = manager.open()

        expect(state.open).toBe(true)
    })

    it('should set cart to closed', () => {
        const manager = new CartManager()
        const state = manager.close()

        expect(state.open).toBe(false)
    })
})
