# 프로페셔널 Ext JS5 Ria 프로그래밍

이 곳은 "프로페셔널 Ext JS5 RIA 프로그래밍" 저서의 소스코드를 공유하기 위한 곳입니다.

소스코드를 사용하기 위한 몇가지 설명을 필독하시기 바랍니다.

## 소스코드 다운로드
소스코드는 현재 보고 계시는 화면 우측의 "Download ZIP" 버튼을 클릭하시고 로컬의 특정 폴더에 압축을 해제합니다.

## 소스코드의 실행
소스코드의 실행전에 Sencha CMD가 설치되어 있어야 합니다. 이 코드는 ext폴더(sdk)를 내장하고 있으므로
따로 workspace를 생성하지 않고 독립적으로 실행가능합니다.

압축 해제된 폴더로 명령프롬프트로 이동해 아래 명령을 실행합니다.

-`sencha app watch` - 이 명령을 통해 개발 모드로 앱 설정 등을 읽어 웹서버를 띄워 줍니다.
-`http://localhost:1841` - 이 명령은 위의 `sencha app watch` 명령에 의해 실행된 앱을 브라우저를 통해 실행합니다.
-`sencha app build` - 이 명령은 앱을 빌드(프로덕션)하는 명령으로 빌드가 완료되면 `sencha web start`명령을 통해 웹서버를 
실행해 빌드 결과를 확인할 수 있습니다. 빌드 결과물은 `http://localhost:1841/build/production/ext5`로 확인합니다.

아래는 주요 폴더에 대한 설명입니다.

 - `"app"` - Ext JS 클래스가 모여 있는 폴더입니다.
 - `"examples"` - 샘플용 html파일이 모여있는 폴더입니다. 각 챕터에 맞는 html파일을 챕터이름으로 분류했습니다.
 - `"resources"` - 이 폴더는 각종 이미지, 자바스크립트, css 등 앱을 위해 추가된 여러 종류에 파일이 존재합니다.
 - `"lib"` - 이 폴더에는 google-code-prettify관련 파일들이 존재합니다. google-code-prettify는 이 책의 마지막 
 실전예제의 코드 미리보기 기능을 구현하기 위해 필요합니다.
 - `"sass"` - 앱의 색상, 디자인 등을 변형하기 위한 scss파일이 존재합니다. 이 파일들은 이 앱이 사용할 테마에 
 합쳐져 실행됩니다.
