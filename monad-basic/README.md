# Monad?

수학의 `카테고리 이론`이라는 분야에서 사용되는 용어이다.  
`디자인 패턴`으로서 몇 가지 인터페이스를 구현한 클래스이다.

함수형 프로그래밍 언어 `Haskel`의 `Prelude라는 표준 라이브러리에서 사용되는 용어이기도 하다.  

`Monad Rule`이라는 코드 디자인 패턴에 맞춰 구현된 클래스를 이야기하기도 한다.  
판타지랜드 규격을 보면 Functor, Apply, Applicative, Chain 네 가지 요소를 구현한 것임을 알 수 있다.

> <https://github.com/fantasyland/fantasy-land>  
> 네 가지 조건을 모두 만족한다면 그 클래스는 Monad이다.

## Monad Rule

클래스 이름이 M이고 해당 클래스의 인스턴스가 m이라면 아래와 같다.

> 왼쪽 법칙은 다음과 같다.
>
> ```javascript
> M.of(a).chain(f) == f(a)
> ```  
>
> 오른쪽 법칙은 다음과 같다.
>
> ```javascript
> m.chain(M.of) == m
> ```  

하스켈의 Prelude 표준 라이브러리는 Maybe와 같이 미리 구현된 모나드를 제공하는데 타입스크립트는 그런거 없다.  
그래서 직접 작성해보았다.

---
