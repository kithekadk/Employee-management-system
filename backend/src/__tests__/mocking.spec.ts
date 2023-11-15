import {v4} from 'uuid'

jest.mock('uuid', ()=>({
    v4: jest.fn()
}))

describe("This mocks the uuid ", ()=>{

    it("generate a unique ID", ()=>{
        // const id = v4()
        const mockedV4 = jest.requireMock('uuid').v4

        mockedV4.mockImplementation(()=> 'uniqueid_dskjfgkjhf_dfkjgsj')

        console.log(v4());
        
    })

})