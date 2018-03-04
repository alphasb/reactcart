import { expect } from 'chai';
import ProductApi from "../../services/Products/ProductApi";


describe('Product Api', () => {

    it('Tests Promise success', () => {
        return ProductApi.loadProductList().then(data => {
            expect(typeof data).to.equal('object');
            expect(data.length).to.be.greaterThan(0);
            expect(typeof data[0].id).to.equal('number');
        });
    });

    it('Tests Promise success with async/await', async () => {
        const data = await  ProductApi.loadProductList();
        expect(typeof data).to.equal('object');
        expect(data.length).to.be.greaterThan(0);
        expect(typeof data[0].id).to.equal('number');

    });

});