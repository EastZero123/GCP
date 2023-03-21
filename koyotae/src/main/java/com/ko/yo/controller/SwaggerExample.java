package com.ko.yo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ko.yo.model.BoardVO;
import com.ko.yo.service.BoardService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.Data;

@Api(tags = "Koyotae")
@RestController
public class SwaggerExample {
	
	
	private final BoardService boardService;
	
	public SwaggerExample(BoardService boardService) {
		this.boardService = boardService;
	}
	
	@ApiOperation(value="전체 불러오기", notes="GET방식으로 전체 게시글 불러오기")
	@GetMapping("/board/list")
	public ResponseEntity<List<BoardVO>> selectAll() throws Exception {
		List<BoardVO> vo = boardService.selectAll();
		return ResponseEntity.ok().body(vo);
	}
	
	
}
