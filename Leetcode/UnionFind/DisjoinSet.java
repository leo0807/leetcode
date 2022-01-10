package Leetcode.UnionFind;

import java.util.HashMap;
import java.util.Map;

import javax.print.Doc;

public class DisjoinSet {
  private Map<Long, Node> map = new HashMap<>();

  class Node {
    long data;
    Node parent;
    int rank;
  }

  // Create a set with only one element
  public static void main() {

  }
}