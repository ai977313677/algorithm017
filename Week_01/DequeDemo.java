import java.util.Deque;
import java.util.LinkedList;

public class DequeDemo {
    public static void main(String[] args) {
        Deque<String> deque = new LinkedList<>();

        deque.addLast("one");
        deque.addLast("two");
        deque.addLast("three");
        deque.addLast("four");
        System.out.println(deque);

        String polledElement = deque.pollFirst();
        System.out.println(polledElement);
        System.out.println(deque);

        String peekElement = deque.peekFirst();
        System.out.println(peekElement);
        System.out.println(deque);

        while (deque.size() > 0) {
            System.out.println(deque.pollFirst());
        }
    }
}
