const memo_obj = {
    form: document.querySelector("#memo-input"),
    input: document.querySelector("#memo-input input"),
    view: document.querySelector("#memo-text span"),
    delete: document.querySelector("#memo-text button")
}

const ID_MEMO = "todaymemo"
const CLASSHIDDEN_DELETE = "hidden"
const MemoDeleteButtonName = "X"

// temp memo
let memo;

const InitMemo = () => {
    memo = localStorage.getItem(ID_MEMO)
    if (null !== memo)
        PaintMemo(memo)
    else
        memo = ""

    memo_obj.form.addEventListener("submit", onMemoSubmit)
    memo_obj.delete.addEventListener("click", onRemoveMemo)
}

const PaintMemo = newmemo => {
    memo_obj.view.innerText = newmemo
    if (memo_obj.delete.classList.contains(CLASSHIDDEN_DELETE))
        memo_obj.delete.classList.remove(CLASSHIDDEN_DELETE)
}

const SaveMemo = () => localStorage.setItem(ID_MEMO, memo)

const onRemoveMemo = () => {
    memo_obj.view.innerText = ""
    memo = undefined
    localStorage.removeItem(ID_MEMO)
    if (!memo_obj.delete.classList.contains(CLASSHIDDEN_DELETE))
        memo_obj.delete.classList.add(CLASSHIDDEN_DELETE)
}

const onMemoSubmit = event => {
    event.preventDefault()
    const newmemo = memo_obj.input.value
    memo = newmemo
    memo_obj.input.value = ""
    SaveMemo()
    PaintMemo(memo)
}

// init
InitMemo()