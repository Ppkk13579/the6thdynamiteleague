function formatDate(dateString){

    const date = new Date(dateString);

    return `${date.getMonth() + 1}月${date.getDate()}日`;

}
