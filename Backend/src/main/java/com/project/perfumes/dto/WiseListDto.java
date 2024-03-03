package com.project.perfumes.dto; //declares the package to which the class WiseListDto belongs
import lombok.AllArgsConstructor; // imports the AllArgsConstructor annotation from the Lombok library. This annotation generates a constructor with arguments for all fields in the class.
import lombok.Getter;//imports the Getter annotation from the Lombok library. This annotation automatically generates getter methods for all non-static fields in the class.
import lombok.NoArgsConstructor; //imports the NoArgsConstructor annotation from the Lombok library. This annotation generates a constructor with no arguments.
import lombok.Setter; //imports the NoArgsConstructor annotation from the Lombok library. This annotation generates a constructor with no arguments.

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class WiseListDto {
    private Long wId; //ID of the wise list.
    private Long pId;
    private Long uId;
}
