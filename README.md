# portfolio-site

## 프로젝트 목적

그동안 익혀왔던 React JS를 적극적으로 활용한 프로젝트를 제작하고 싶었습니다.
기존의 포트폴리오 사이트의 단점을 보완하여 쉽고 간편하게 프로젝트를 관리할 수 있는 포트폴리오 사이트 제작해 쇼잉하는 것 그리고 리액트에 더욱 익숙해지는 것을 목표로 진행되었습니다.

## 사이트맵 구조

```
Portfolio Site
├── Landing
│   └── Project Detail
├── About
├── Login
└── Project List
    └── Project Edit
    └── Project Write
```

### 페이지 구성

##### 퍼블릭 페이지

- Landing - 웹의 메인페이지이자 프로젝트 리스트 페이지입니다. 직관적이고 빠른 접근을 위해 메인페이지에서 프로젝트의 목록을 바로 볼 수 있도록 작업하였습니다.
- About - 저를 소개하는 페이지입니다. 사용 가능한 스택에 대한 정보를 함께 보여줍니다.

##### 어드민 페이지

어드민 페이지는 로그인을 통해 인증된 관리자만 접근할 수 있습니다.

- Project Write - 프로젝트를 직접 작성할 수 있습니다.
- Project Edit - 작성한 프로젝트를 직접 수정할 수 있습니다.
- Project List - 프로젝트의 리스트를 한 눈에 확인하고 **Edit(수정)**, **Delete(삭제)** 와 같은 작업을 할 수 있습니다.

<br/><br/>

## 기능 및 모션 / UI 정의

- 프로젝트 작성 / 수정 / 삭제
  > 1. MongoDB 데이터 통신을 통한 컨텐츠 정보 저장 / 수정 / 삭제
  > 2. Toast UI Editor 를 사용한 게시글 작성 및 뷰어
- 로그인, 로그아웃 기능
  > 어드민 관리자만 사용가능
- 데이터 통신을 통한 실시간 프로젝트 조회
- AWS S3 이미지 업로드
- 라이트모드 & 다크모드 토글
- Framer Motion을 활용한 애니메이션
- Loading Spinner

<br/><br/>

## 준비과정

개발 시작에 앞서 여러 사이트들을 벤치마킹하여 어떻게 구성하면 좀 더 직관적으로 보여질 수 있을까 고민하며 UI/UX를 구성했습니다.
웹의 전반적인 분위기와 레이아웃을 구성하여 초기 디자인을 베이스로 개발 작업이 진행되면서 부분적으로 디벨롭하거나, 불필요한 요소는 제거하는 등의 과정을 거쳤습니다.
![portfolio img](https://my-site-buket.s3.amazonaws.com/content/1645283910537.png)

<br/><br/>

## 화면 및 기능 상세

### MongoDB 데이터베이스 관리

NoSQL 데이터베이스인 MongoDB 를 연결하여 데이터를 관리합니다.
적합하지 않은 타입으로 데이터가 저장됨을 방지하기 위해 mongoose 라이브러리를 도입해 데이터 모델의 스키마를 정의하고 수정, 삭제 등을 통해 데이터를 관리합니다.

```js
/* server/models/Posts.js */
const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    default: 'personal',
  },
  //...
});

...

const Post = mongoose.model('Post', postSchema);
module.exports = { Post };
});
```

### 리덕스를 통한 상태관리

수정 / 삭제 / 추가 등의 행위에 따라 업데이트가 수시로 진행되어야하는 웹사이트이기 때문에 순수 React만 사용하는 것 보다 상태관리를 효율적이고 빠르게, 그리고 간단하게 관리할 수 있는 Redux를 도입하였습니다.

```js
/* client/src/_actions/types.js */
export const POST_NOTE = 'POST_NOTE';
...

/* client/src/_action/post_action.js */
export function postNote(dataToSubmit) {
  const request = axios
    .post('/api/posts/note', dataToSubmit)
    .then((response) => response.data);
  return {
    type: POST_NOTE,
    payload: request,
  };
}
...
```

```js
/* client/src/pages/LandingPage.jsx */
useEffect(() => {
  dispatch(postList()).then((response) => {
    setLoading(false);
    setPosts(response.payload.data.reverse());
  });
}, [dispatch]);
```

깔끔하게 관리할 수 있도록 별도의 action 파일들을 생성해 프로젝트의 목록을 dispatch 로 받아오도록 하였습니다.
웹이 처음 렌더될 때, 그리고 데이터가 추가되거나 업데이트될 때 자동적으로 동작하도록, 실시간으로 프로젝트의 상태를 확인할 수 있습니다. 또한 데이터를 모두 불러오기 전에 데이터가 불러와지고 있음을 시각적으로 확인할 수 있도록 Loading 상태를 추가하였습니다.

### 메인 & 프로젝트 목록

메인페이지이자 프로젝트의 목록을 보여주는 페이지로 저장된 데이터를 조회할 수 있습니다.
프로젝트 작성 시 비공개로 처리된 항목은 사용자에게 보여지지 않습니다.

**Framer Motion** 라이브러리를 사용하여 페이지 전환시 딱딱한 느낌을 덜고 부드럽게 전환되도록 작업하였습니다.
깔끔한 UI로 구성되어있기 때문에 과한 인터랙션보다 적당히 부드러운 전환효과를 구현하였습니다.

![portfolio img](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645286776895.gif)

### 프로젝트 상세

프로젝트의 상세 소개와 디테일한 설명을 보여주는 페이지입니다.
Detail 영역부터는 Toast UI Editor 라이브러리의 Viewer 를 사용해 마크다운로 작성한 글을 볼 수 있습니다.
저장된 데이터로부터 정보를 불러오며 데이터가 완전히 불러와지기 전에 컨텐츠의 부재를 대신하여 Loading Spinner를 추가하였습니다.

최상단의 히어로(hero) 이미지에 스크롤에 따른 인터랙션을 구현하여 시각적 재미요소를 더했습니다.

상세페이이지의 최하단으로 이동 시 사용자의 접근성을 위해 이전 프로젝트와 다음 프로젝트로 이동할 수 있으며, 관리자가 비공개처리한 프로젝트는 보여지지 않습니다.
![portfolio img](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645288414322.gif)

### 어드민 페이지

#### 로그인

어드민 로그인 경로로 이동시 GNB 에 **로그아웃** 과 **어드민** 버튼이 추가됩니다.
로그아웃 버튼을 클릭하면 메인페이지로, 어드민 버튼을 클릭하면 어드민 프로젝트 관리 페이지로 이동합니다.

#### 프로젝트 목록

이전 포트폴리오 사이트에서는 수정사항이나 새 프로젝트가 추가되면 직접 해당 코드를 작성해야했습니다. 이런 불편함을 개선하여 어드민 페이지에서 직접 관리할 수 있는 포트폴리오를 제작하였습니다.

테이블은 Antd 앤트디자인의 테이블 컴포넌트를 활용하였습니다. **Edit** 버튼을 클릭하면 페이지를 프로젝트 수정 페이지로 이동하며 **Delete** 버튼을 클릭하면 해당 프로젝트는 삭제됩니다.

![portfolio img](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645289716886.gif)

#### 프로젝트 작성

_[Toast UI Editor](https://ui.toast.com/tui-editor)_ 를 사용하여 마크다운으로 작성한 프로젝트의 데이터는 MongoD에 저장되며, 썸네일, 컨텐츠에 들어가는 이미지나 에디터에 작성되는 파일은 **AWS S3** 에 자동적으로 _썸네일 이미지, 히어로 이미지, 컨텐츠 이미지_ 를 폴더로 분류하여 저장합니다.
![alt text](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645296685675.gif)

### 프로젝트 수정 및 삭제

프로젝트를 삭제 / 수정할 수 있습니다.
![alt text](https://my-site-buket.s3.amazonaws.com/content/1645358418967.gif)

### 라이트 / 다크 테마

우측 상단의 아이콘을 클릭하면 테마를 변경할 수 있습니다.
![portfolio img](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645293501685.png)

### 반응형 웹

![portfolio img](https://my-site-buket.s3.ap-northeast-2.amazonaws.com/content/1645296670845.gif)
