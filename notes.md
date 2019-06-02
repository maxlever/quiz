# notes
thoughts on quartz assignment

how to make it easily extensible

reminded of survey monkey API

questions names, answers, are all separate and id-referred

```json
{ questionType: ‘multiple-choice’, position: 1, questionID: 1234, text: ‘hello?’, choices: [
  { choiceID: 2345, text: ‘choice # 1’, position: 1 }, …
]}
```

choice ID question ID position => survey is then reconstructed

`generateQuiz(questions)`

`gatherAnswers`

i initially started to use a library which fetched JSON data into props, but then realized it was overkill and I could achieve a similar effect using state

maybe use takeshape so non-technical users can generate questions etc?

i was thinking about using routes but maybe it's too complicated?

should i index questions by their id or should i have them in a list? and then have to find them afterwards? if i have map by id, then i need to make a sorted list at the beginning, otherwise i need to make a map at the end.

one code smell is passing down props for next handler. in another version, more scaled version, i might use a state mgmt system like redux to avoid this.

since my audience is non-technical, i am using a CMS so anyone can add questions

