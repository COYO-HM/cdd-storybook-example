# [원티드 프리온보딩 챌린지 6월] cdd-storybook-example-library
> 스토리북을 이용한 컴포넌트 주도 개발 (Component-Driven Development)

## 개발 환경
- npm
- React
- Styled-Component

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ npm i cdd-storybook-example-library
```

## Usage

```jsx
import { Button } from "cdd-storybook-example-library";

const Example = () => {
    const [count, setCount] = useState(0);
    
    return  <Button
        label={`count is ${count}`}
        color={"black"}
        backgroundColor={"ivory"}
        onClick={() => setCount((count) => count + 1)}
    />
}
```

## Docs

- Storybook Link
    - https://coyo-hm.github.io/cdd-storybook-example-library

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY