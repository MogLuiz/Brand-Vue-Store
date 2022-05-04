// CartManager
import { CartManager } from '@/managers/CartManager'

describe('CartManager', () => {
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
