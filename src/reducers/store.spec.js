import { nowPlaying } from './index';

describe('playing', () => {
    describe('nowPlaying', () => {

        it('inits as null', () => {
            expect(nowPlaying(null, {}).toEqual(null));
        })
    })
})