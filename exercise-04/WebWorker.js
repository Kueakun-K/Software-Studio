const DateTimeWorker = () => {
    const dateTime = new Date();
    postMessage(dateTime);
    setTimeout("DateTimeWorker()", 1000);
  }
  
  DateTimeWorker();