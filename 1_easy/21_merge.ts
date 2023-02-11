function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null
  if (!list2) return list1
  if (!list1) return list2

  const head = list1.val < list2.val ? list1 : list2
  if (!head.next) {
    head.next = head === list1 ? list2 : list1
    return head
  }

  let mergeTo = head
  let mergeFrom = head === list1 ? list2 : list1

  while (mergeTo) {
    if (!mergeTo.next) {
      mergeTo.next = mergeFrom
      break
    }

    if (!mergeFrom) {
      break
    }

    if (mergeFrom.val >= mergeTo.val && mergeFrom.val <= mergeTo.next.val) {
      const nextMergeTo = mergeTo.next
      const nextMergeFrom = mergeFrom.next
      mergeTo.next = mergeFrom
      mergeFrom.next = nextMergeTo

      mergeFrom = nextMergeFrom as ListNode
    }

    mergeTo = mergeTo.next
  }

  return head
}
