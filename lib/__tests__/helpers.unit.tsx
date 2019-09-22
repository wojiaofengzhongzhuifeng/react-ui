import {flatten} from '../helpers/helps';
describe('测试 flatten 函数', () => {
  it('[1,2,3,4,5] 经过 flatten 处理，返回[1,2,3,4,5]', () => {
    expect(flatten([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  })
  it('[1,2,[4,5]] 经过 flatten 处理，返回[1,2,4,5]', () => {
    expect(flatten([1,2,3, [4,5]])).toEqual([1,2,3,4,5]);
  })
});
