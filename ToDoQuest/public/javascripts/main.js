$(document).ready(function() {
  console.log('app.js loaded!');
  $('#addNewQuest').on('submit', (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/user/quests',
      data: {
        todo: e.currentTarget['0'].value,
        importance: e.currentTarget['1'].value,
        difficulty: e.currentTarget['2'].value,
        due: ''
      },
      success: newQuestSuccess,
      error: newQuestError, 
    });
  });
});

const newQuestSuccess = () => {
  $('input').val('')
}

const newQuestError = () => {
  console.log('Error, try again')
}