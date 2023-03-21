package com.ko.yo.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardVO {

	private int bno;
	
	private String title;
	
	private String content;
	
	private String writer;
	
	private LocalDateTime regDate;
	
	private LocalDateTime modDate;
	
	public void change(String title, String content) {
		this.title = title;
		this.content = content;
	}
}
